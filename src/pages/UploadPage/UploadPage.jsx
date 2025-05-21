import UploArtworkUploadForm from "../../components/Form/UploadForm";
import "./UploadPage.css"

const UploadPage = () => {
  return (
    <section className="uploadFormPage">
      <p className="upload-page-title">
        Añade una obra
      </p>
      <UploArtworkUploadForm />
    </section>
  );
};

export default UploadPage;
