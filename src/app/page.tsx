'use client';
import {Dialog} from '~/atoms';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Some Title</Dialog.Title>
            <Dialog.Description>Some description.</Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog>
    </main>
  );
}
