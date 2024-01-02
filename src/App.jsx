import { Card, CardEducation, CardJob, CardPersonal } from "./components/Attributes"
import { UpdateValue } from "./components/CV"

const App = () => {

  return (
    <>
      <Card>
        <CardPersonal />
      </Card>
      <Card>
        <CardEducation />
      </Card>
      <Card>
        <CardJob />
      </Card>

    </>
  )
}

export default App
