import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

import { VoteSuccessModalProps } from '@/src/components/VoteSuccessModal/VoteSuccessModal.type';
import { ChartBarIcon, ShareIcon } from '@heroicons/react/24/solid';
import { Link } from '@/src/navigation';

export function VoteSuccessModal({
  open,
  setOpen,
  publicId,
}: VoteSuccessModalProps) {
  const t = useTranslations('VoteSuccessModal');

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 dark:bg-gray-900 opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-lg sm:p-6 border border-transparent dark:bg-gray-800 dark:border-gray-700">
                <button
                  className="absolute right-4 top-4 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  <XMarkIcon className="size-6" />
                </button>
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    >
                      {t('voteSuccess')}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-rock-blue">
                        {t('voteSuccessDescription')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 flex max-sm:flex-col sm:space-x-6">
                  <Link
                    href={`/${publicId}/results`}
                    className="btn primary text-sm border border-gray-200 max-sm:grow dark:border-gray-700 dark:bg-gray-700/50 flex-1 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
                  >
                    <ChartBarIcon className="h-5 w-5 -ml-1 mr-2" />
                    <span>{t('results')}</span>
                  </Link>
                  <button
                    className="btn text-sm border border-gray-200 max-sm:grow sm:w-40 dark:border-gray-700 dark:bg-gray-700/50 disabled:opacity-50 flex-1 disabled:pointer-events-none mt-4 sm:mt-0"
                    disabled
                  >
                    <ShareIcon className="size-5 -ml-1 mr-2" />
                    <span>{t('share')}</span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
