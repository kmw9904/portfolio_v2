import Modal from "@/components/modal";
import AboutPage from "@/app/about/[id]/page";

export default function Page(props: any) {
  return (
    <Modal>
      <AboutPage {...props} />
    </Modal>
  );
}
