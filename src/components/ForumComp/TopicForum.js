import { useState } from "react";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { nanoid } from "nanoid";
import { BsFillTrashFill } from "react-icons/bs";

function TopicForum({ selectTopicForum, topicDataDetail }) {
  const [newCommentInput, setNewCommentInput] = useState("");
  const [currentlyLoggedinUser] = useAuthState(auth);
  console.log(currentlyLoggedinUser);
  const commentRef = doc(db, "Topics", selectTopicForum);
  const authorPost = topicDataDetail.find(
    (item) => item.id === selectTopicForum
  );

  const handleSubmitNewComment = (e) => {
    e.preventDefault();
    if (newCommentInput.trim() === "") {
      alert("Add a description !");
    } else {
      updateDoc(commentRef, {
        otherUserComments: arrayUnion({
          userId: currentlyLoggedinUser.uid,
          userName: currentlyLoggedinUser.email.split("@")[0].toUpperCase(),
          comments: newCommentInput,
          createdAt: new Date(),
          commentId: nanoid(),
        }),
      }).then(() => {
        setNewCommentInput("");
      });
    }
  };
  const handleCommentDelete = (comment) => {
    updateDoc(commentRef, {
      otherUserComments: arrayRemove(comment),
    });
  };

  return (
    <div className="scrollable-menu-forum">
      <div className="topicTitle me-2">
        <p className="text-center fs-5 text-ninth fw-semibold">
          {authorPost && authorPost.title.toUpperCase()}
        </p>
      </div>
      <hr className="text-ninth mx-2" />
      <div>
        <ul>
          <li className="d-grid text-eighth border-primary border-bottom me-2">
            <p className="mt-1">{authorPost && authorPost.description}</p>
            <p className="text-end fs-8 d-grid">
              <span className="text-fourth">
                {authorPost && authorPost.author.toUpperCase()}
              </span>
            </p>
          </li>
          {authorPost &&
            authorPost.otherUserComments.map((item) => {
              return (
                <li className="d-grid border-primary border-bottom me-2">
                  <p className="mt-1 text-eighth">{item.comments}</p>
                  <p className="text-end fs-8 d-grid">
                    <span className="text-fourth">{item.userName}</span>
                    <span
                      className={`${
                        item.userId === currentlyLoggedinUser.uid
                          ? ""
                          : "d-none"
                      }`}
                      onClick={() => handleCommentDelete(item)}
                    >
                      <BsFillTrashFill className="text-seventh cursor fs-6" />
                    </span>
                  </p>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="topicForumFooter row w-100 ">
        <div className="text-center">
          <form onSubmit={handleSubmitNewComment} className="mt-2">
            <textarea
              className="w-75"
              placeholder="New Comment"
              value={newCommentInput}
              onChange={(e) => setNewCommentInput(e.target.value)}
              style={{ height: "75px" }}
            />
            <div className="">
              <button className="btn btn-ninth px-5 fw-semibold" type="submit">
                Share
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TopicForum;
