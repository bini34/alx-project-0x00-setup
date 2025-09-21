

import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="flex gap-4 my-4 flex-wrap">
        <Button title="Small" styles="text-xs rounded-sm px-2 py-1" />
        <Button title="Medium" styles="text-base rounded-md px-4 py-2" />
        <Button title="Large" styles="text-lg rounded-full px-6 py-3" />
        <Button title="Extra" styles="text-base rounded-lg px-4 py-2" />
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Landing
