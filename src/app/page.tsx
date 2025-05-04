import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-4 p-4 max-w-md">
        <div>
          <Button variant="elevated">Button</Button>
        </div>
        <Input placeholder="enter text" />
        <Progress value={50} />
        <Textarea placeholder="I am textarea" />
        <Checkbox />
      </div>
    </div>
  );
}
