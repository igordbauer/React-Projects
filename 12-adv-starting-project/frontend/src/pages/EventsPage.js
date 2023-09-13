import EventsList from "../components/EventsList";

const eventos = [
  {
    id: 1,
    title: "Evento Aleatório 1",
    image: "imagem1.jpg",
    date: "2023-09-15",
  },
  {
    id: 2,
    title: "Evento Aleatório 2",
    image: "imagem2.jpg",
    date: "2023-09-20",
  },
  {
    id: 3,
    title: "Evento Aleatório 3",
    image: "imagem3.jpg",
    date: "2023-09-25",
  },
  {
    id: 4,
    title: "Evento Aleatório 4",
    image: "imagem4.jpg",
    date: "2023-09-30",
  },
  // Adicione mais objetos conforme necessário
];

const EventsPage = () => {
  return (
    <>
      <EventsList events={eventos} />
    </>
  );
};
export default EventsPage;
