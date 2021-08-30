import Head from 'next/head';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

import { IUser } from './dashboard';
import { GET_POLLS } from './explore';

export default function Create({ user }: IUser) {
  const [errors, setErrors] = useState<any>({});
  const [form, setForm] = useState({
    title: '',
    answers: ['', ''],
    multiple: false,
    visibility: 'public',
    name: user.name,
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i?: number
  ): void => {
    if (i === undefined)
      setForm((prev) => ({
        ...prev,
        [e.target.name]:
          e.target.type === 'checkbox' ? e.target.checked : e.target.value,
      }));
    else {
      if (i === form.answers.length - 1)
        setForm((prev) => ({ ...prev, answers: [...prev.answers, ''] }));
      else {
        const answers = [...form.answers];
        answers[i] = e.target.value;
        setForm((prev) => ({ ...prev, answers }));
      }
    }
  };

  const [createPoll] = useMutation(CREATE_POLL, {
    variables: form,
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.errors);
    },
    update(_, { data: { createPoll } }) {
      router.push(`/p/${createPoll.id}`);
    },
  });

  return (
    <div className="container">
      <Head>
        <title>Create a Poll / Poll App</title>
      </Head>
      <h1 className="font-semibold text-3xl text-center">Create a Poll</h1>
      {errors && Object?.keys(errors)?.length > 0 && (
        <ul className="error">
          {Object?.values(errors)?.map((val: any) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-col space-y-1">
        <p>Title:</p>
        <input
          type="text"
          placeholder="Type your question..."
          className="input"
          name="title"
          value={form.title}
          onChange={(e) => handleChange(e)}
        />
        <p>Answers:</p>
        <span className="flex flex-col space-y-2">
          {form.answers.map((ans, i) => (
            <input
              key={i}
              type="text"
              placeholder="Type your answer..."
              className="input"
              value={form.answers[i]}
              onChange={(e) => handleChange(e, i)}
              onFocus={(e) => handleChange(e, i)}
            />
          ))}
        </span>
        <div className="flex space-x-2 items-center">
          <input
            type="checkbox"
            id="multiple"
            name="multiple"
            checked={form.multiple}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="multiple">Multiple Choice?</label>
        </div>
        <select
          name="visibility"
          className="input w-24"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, visibility: e.target.value }))
          }
        >
          <option value="public">Public</option>
          <option value="unlisted">Unlisted</option>
        </select>
        <button className="button" onClick={() => createPoll()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      user: session ? session.user : { name: 'guest' },
    },
  };
};

const CREATE_POLL = gql`
  mutation createPoll(
    $title: String!
    $answers: [String!]!
    $multiple: Boolean!
    $visibility: String!
    $name: String!
  ) {
    createPoll(
      pollInput: {
        title: $title
        answers: $answers
        multiple: $multiple
        visibility: $visibility
        name: $name
      }
    ) {
      id
      title
      createdAt
    }
  }
`;
