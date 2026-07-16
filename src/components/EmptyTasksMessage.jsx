const EmptyTasksMessage = () => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-white bg-opacity-10 py-3 text-sm text-brand-text-gray">
      <span>Não há tarefas para o período.</span>
    </div>
  );
};

export default EmptyTasksMessage;
