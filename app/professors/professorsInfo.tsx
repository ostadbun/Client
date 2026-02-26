import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

type ProfessorsInfoProps = {
  address: string
  teachingYears: number
  degree: string
  university: string
  major: string
}

const ProfessorsInfo = ({
  address,
  teachingYears,
  degree,
  university,
  major,
}: ProfessorsInfoProps) => {
  return (
    <div className="flex justify-center mb-8">
      <Card className="w-full max-w-3xl ">
        <CardContent className="p-6 space-y-6">
          
          <div className="text-center space-y-1">
            <h2 className="text-3xl font-bold">shadcn/ui</h2>
            <p className="text-muted-foreground">
              The Foundation for your Design System
            </p>
          </div>

          <Separator />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">آدرس</span>
              <span className="text-muted-foreground">{address}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">سابقه تدریس</span>
              <span className="text-muted-foreground">{teachingYears} سال</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">مقطع تحصیلی</span>
              <span className="text-muted-foreground">{degree}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">دانشگاه</span>
              <span className="text-muted-foreground">{university}</span>
            </div>

            <div className="flex justify-between border-b pb-2 sm:col-span-2">
              <span className="font-medium">رشته</span>
              <span className="text-muted-foreground">{major}</span>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default ProfessorsInfo