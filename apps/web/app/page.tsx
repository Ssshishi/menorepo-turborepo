"use client"

import { Button, Header } from "@turbo/ui";
import { toFen } from '@turbo/utils'
import { useMount } from '@turbo/hooks'

export default function Page() {
  const a = toFen(500)
  
  useMount(() => console.log(111, a));

  return (
    <>
      <Header text="Web" />
      <Button />
    </>
  );
}
