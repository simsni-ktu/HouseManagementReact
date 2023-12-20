import { useParams } from "react-router-dom";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";
import ResidenceInfo from "../../components/ResidenceInfo";

function Residence() {
  const [residence, setResidence] = useState<Residence>();
  const { id } = useParams();
  useEffect(() => {
    if (id !== undefined) {
      console.log(id);
      Api.getResidence(id).then((data) => {
        setResidence(data);
      });
    }
  }, []);

  return residence === undefined ? (
    <>
      <p>{id}</p>
    </>
  ) : (
    <div className="flex justify-center pt-32 ">
      <ResidenceInfo {...residence} />
    </div>
  );
}
export default Residence;
