import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const LessonInfo = () => {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-4 justify-center">
        <Button className="text-base font-medium">
          موضوع
        </Button>

        <h2 className="text-2xl font-semibold">
          shadcn/ui
        </h2>

        <Button className="text-base font-medium">
          موضوع
        </Button>
      </div>

      <p className="text-muted-foreground text-center">
        The Foundation for your Design System
      </p>

      <Separator />

      <p className="text-center">
        A set of beautifully designed components that you can customize,
        extend, and build on.
      </p>
    </div>
  )
}
export default LessonInfo;