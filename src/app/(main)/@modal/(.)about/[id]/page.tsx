import Modal from "@/components/modal";
import AboutPage from "@/app/(main)/about/[id]/page";

export default function Page(props: any) {
  return (
    <Modal>
      <AboutPage {...props} />
    </Modal>
  );
}
