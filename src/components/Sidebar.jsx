import { HomeIcon, TasksIcon } from "../assets/icons";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className="h-screen w-80 bg-white">
      <div className="space-y-4 border-b px-8 py-6">
        <h1 className="text-2xl font-semibold text-brand-primary">
          Task Manager
        </h1>
        <p className="text-xs">
          Um simples{" "}
          <span className="text-brand-primary">organizador de tarefas</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton color="unselected">
          <HomeIcon />
          Início
        </SidebarButton>
        <SidebarButton color="selected">
          <TasksIcon />
          Minhas tarefas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
