

import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="flex gap-4 my-4 flex-wrap">
        <Button title="Small" className="text-xs rounded-sm px-2 py-1" />
        <Button title="Medium" className="text-base rounded-md px-4 py-2" />
        <Button title="Large" className="text-lg rounded-full px-6 py-3" />
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Landing
