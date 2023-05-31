"use client"

import { Button, Header } from "ui";
import { toFen, useMount } from 'utils'

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
