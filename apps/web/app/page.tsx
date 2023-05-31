"use client"

import { Button, Header } from "mariay-ui";
import { toFen } from 'maria-utils'
import { useMount } from 'maria-hooks'

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
