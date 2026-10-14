import Modal from "@/components/modal";
import ProjectPage from "@/app/(main)/project/[id]/page";

export default function Page(props: any) {
  return (
    <Modal>
      <ProjectPage {...props} />
    </Modal>
  );
}
