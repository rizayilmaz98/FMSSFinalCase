import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill,BsFillPlusSquareFill } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { Timestamp, addDoc, collection,query,onSnapshot } from "firebase/firestore";
import { auth,db,logout } from "../../firebase";
import TopicForum from "./TopicForum";
import Topics from "./Topics";
import { useNavigate } from 'react-router-dom';

function Forum() {
  const [newTopicInput, setNewTopicInput] = useState({
    title: "",
    description: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [allTopics,setAllTopics] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const newTopicHandleSubmit = (e) => {
    e.preventDefault();
    if (
      newTopicInput.title.trim() === "" ||
      newTopicInput.description.trim() === ""
    ) {
      alert("There are empty fields");
    } else{
      const newTopics = collection(db,"Topics");
      addDoc(newTopics,{
        title: newTopicInput.title,
        description:newTopicInput.description,
        createdAt:Timestamp.now().toDate(),
        author:user.email.split("@")[0],
        userID:user.uid,
        otherUserComments:[]
      })

    }
    setNewTopicInput({title:"",description:"",createdAt:""})

  };
  useEffect(()=>{
    const topicRef = collection(db, "Topics");
    const q = query(topicRef);
    onSnapshot(q, (snapshot) => {
      const topics = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllTopics(topics);
    });
  },[])
  const [selectTopic,setSelectTopic] = useState("xyYx1PLuriIOQbwpQnnJ")
  const handleLogout = async () => {
    await logout();
    navigate("/",{
      replace:true
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-between">
          <Link to="/">
            <BsFillArrowLeftCircleFill className="fs-1 mt-4 backHome cursor" />
          </Link>
          <div className="border border-primary rounded-5 gradientBg mt-3 px-4 d-flex justify-content-between align-items-center">
            <span className="text-center text-third fw-bold">
              {user && user.email.split("@")[0].toUpperCase()}
            </span>
            <span className="ms-3 cursor rounded-3 px-2 bg-seventh text-fourth" onClick={()=>handleLogout()}>
              Logout
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 d-flex justify-content-start p-0">
          <button
            type="button"
            class="btn btn-ninth fw-semibold px-4 mt-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            New Topic <BsFillPlusSquareFill className="ms-2 mb-1 text-primary fs-6"/>
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    New Topic
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={newTopicHandleSubmit}>
                    <p className="fw-semibold">Title</p>
                    <input
                      className="form-control"
                      value={newTopicInput.title}
                      onChange={(e) => {
                        setNewTopicInput({
                          ...newTopicInput,
                          title: e.target.value,
                        });
                      }}
                    />
                    <p className="fw-semibold mt-2">Description</p>
                    <textarea
                      className="form-control"
                      value={newTopicInput.description}
                      onChange={(e) => {
                        setNewTopicInput({
                          ...newTopicInput,
                          description: e.target.value,
                        });
                      }}
                      style={{ height: "200px" }}
                    />
                    <button
                      type="submit"
                      className="btn btn-ninth w-100 mt-3 fw-semibold mx-auto"
                      data-bs-dismiss="modal"
                    >
                      SHARE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row rounded-start mt-2 ">
        <div className="col-12 col-lg-3 heightTopic p-0 bg-primary rounded-start">
          <Topics topicsData= {allTopics} setterSelectTopic = {setSelectTopic}/>
        </div>
        <div className="col-12 col-lg-9 mt-4 mt-md-0 heightForum p-0 gradientBg rounded-end">
          <TopicForum selectTopicForum={selectTopic} topicDataDetail = {allTopics}/>
        </div>
      </div>
    </div>
  );
}

export default Forum;
