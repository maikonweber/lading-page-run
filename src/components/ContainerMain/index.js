import AddCaixaButton from "../AddCaixaButton";
import Table from "../Table";

const ContainerMain = () => {
  return <div className="flex h-screen bg-gray-200">

    <aside className="w-1/4 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4"> Entrada </h2>
      <AddCaixaButton />
      <Table url="" />
    </aside>


    <main className="flex-1 p-4 overflow-hidden">
      <h1 className="text-3xl font-bold mb-4"> Saida </h1>
      <>
        <AddCaixaButton />

        <Table url="" />
      </>
    </main>
  </div>
}

export default ContainerMain;