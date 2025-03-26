export const getEnvUrl = () =>
    import.meta.env.MODE === "development"
        ? "http://localhost:6751/"
        : `${window.location.href}`;
