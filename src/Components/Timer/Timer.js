import './Timer.css'


//<svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} style={"fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"}><path d={"M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"}></path></svg>

const BlockUI = ({ blocking }) => {
  if (!blocking) {
    return "";
  } else {
    return (
      <div className="overlay">
        <div className="overlay_inner">
          <div className="overlay_content">
          <img src={'https://images.unsplash.com/photo-1586374579358-9d19d632b6df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className="loader" alt="loader" />

            <h3>Loading...</h3>
          </div>
        </div>
      </div>
    );
  }
};

BlockUI.defaultProps = {
  blocking: false,
};


export default BlockUI;