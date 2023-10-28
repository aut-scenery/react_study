function ChildrenA () {
  return (
    <div>My name is ChildrenA</div>
  )
}

function ChildrenB () { 
  return (
    <div>My name is ChildrenB</div>
  )
}

function ChildrenC () {
  return (
    <div>My name is ChildrenC</div>
  )
}

function Father () {
  return (
    <>
      <ChildrenA />
      <ChildrenB />
      <ChildrenC />
    </>
  )
}
export default Father