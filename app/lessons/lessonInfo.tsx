import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

type LessonInfoProps = {
  level: number
}

export const hardnesser = (level: number): string => {
  switch (level) {
    case 1:
      return "ساده"
    case 2:
      return "متوسط"
    case 3:
      return "چالش‌برانگیز"
    case 4:
      return "سخت"
    case 5:
      return "وحشتناک"
    default:
      return ""
  }
}

const LessonInfo = ({ level }: LessonInfoProps) => {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-4 justify-center">
        <Button className="text-base font-medium">
          {hardnesser(level)}
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

export default LessonInfo