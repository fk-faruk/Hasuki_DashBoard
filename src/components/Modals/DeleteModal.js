import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

const DeleteModal = (props) => {
  // const ffff = props.alluserdata;
  const [deleteModal, setdeleteModal] = useState(false);
  const [del, setdel] = useState(props.alluserdata);
  const [data, setdata] = useState([]);

  // console.log(props.userAddress);

  // del.map((dd) => {
  //   return dd.address;
  // });
  const style = {
    backgroundColor: "#dc3545",
  };

  const handleClick = (address) => {
    try {
      // console.log(del);

      setdel((prev) => {
        // console.log(prev);
        return prev.filter((nnn) => {
          return nnn.address !== address;
        });
      });
      console.log(del);
      // console.log(address);
      // const filterred = del.filter((userdata) => {
      //   return userdata.address === address;
      // });

      // const filterred = del.filter((nnn) => {
      //   console.log(nnn);
      //   return nnn.address !== address;
      // });
      // const filterred = del.filter((nnn) => nnn.address === address);
      // setdel(filterred);
      console.log(filterred);
      // console.log(del);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Button
        onClick={() => setdeleteModal(true)}
        className="p-2 w-13 mt-2 mb-2 mr-2 text-center rounded"
        style={style}
      >
        Delete
      </Button>
      <Modal
        show={deleteModal}
        size="md"
        popup={true}
        onClick={() => setdeleteModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <div className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this User?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => handleClick(props.userAddress)}
              >
                Yes, I'm sure
              </Button>
              <Button color="gray">No, cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteModal;
