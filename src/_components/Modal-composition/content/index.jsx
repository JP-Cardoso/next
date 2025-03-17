import "./style.scss";

export default function ModalContent({
  children
}) {

  return (
    <div className="content-modal">
      {children}
    </div>
  )
}
