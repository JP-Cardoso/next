import "./style.scss"

export default function ModalActions({
  children,
}) {
  return (
    <footer className="modal-actions">
      {children}
    </footer>
  )
}