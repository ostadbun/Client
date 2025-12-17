"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lens } from "@/components/ui/lens"

type Props = {
  name: string
  field: string
  image: string
  bio: string
}

export function LensDemo({ name, field, image, bio }: Props) {
  return (
    <Card className="relative shadow-none">
      <CardHeader>
        <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
        >
          <img
            src={image}
            alt={name}
            width={500}
            height={500}
            className="rounded-xl"
          />
        </Lens>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{field}</p>
        <p className="text-sm mt-2">{bio}</p>
      </CardContent>
    </Card>
  )
}