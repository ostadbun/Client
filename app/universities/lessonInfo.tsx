import { Separator } from "@/components/ui/separator";

const LessonInfo = () => {
  return (
    <div className="space-y-2 mb-[3vh]">
      <h2 className="text-2xl place-self-center font-semibold">shadcn/ui</h2>
      <p className="place-self-center  text-muted-foreground">
        The Foundation for your Design System
      </p>
      <Separator />
      <p className="place-self-center ">
        A set of beautifully designed components that you can customize,
        extend, and build on.
      </p>
    </div>
  )
}
export default LessonInfo;