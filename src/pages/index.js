import Counter from "../components/Counter";

export default function Home() {
  const thing = "stuff";
  return (
    <>
      <p>Hello World!</p>
      <Counter text={thing}/>
    </>
  )
}
