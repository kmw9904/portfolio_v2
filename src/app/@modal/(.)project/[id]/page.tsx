import Modal from "@/components/modal";
import ProjectPage from "@/app/project/[id]/page";

export default function Page(props: any) {
  return (
    <Modal>
      <ProjectPage {...props} />
    </Modal>
  );
}
