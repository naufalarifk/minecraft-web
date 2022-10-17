import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  const onSavingWorld = () => {
    saveWorld();
    window.location.reload()
  }

  return(
    <div className="menu absolute">
    <button onClick={onSavingWorld}>Save</button>
    <button onClick={()=> resetWorld()}>Reset</button>
    </div>
  )
};
