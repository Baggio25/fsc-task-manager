const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-brand-dark-blue";
    }

    if (variant === "selected") {
      return "rounded-lg bg-brand-primary bg-opacity-15 text-brand-primary";
    }
  };

  return (
    <a
      href="#"
      className={`flex items-center gap-2 px-6 py-3 ${getVariantClasses()} transition hover:opacity-80`}
    >
      {children}
    </a>
  );
};

export default SidebarButton;
