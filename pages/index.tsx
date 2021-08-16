function Main() {
  return <div className="flex flex-1 justify-center items-center h-full flex-col">
    <div className="text-lg mb-4 font-bold">KANBAN BOARD PROJECT</div>
    <div>{'HASURA_BASE_URL: ' + process.env.HASURA_BASE_URL}</div>
  </div>
}

export default Main;
