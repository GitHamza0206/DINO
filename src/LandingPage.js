function LandingPage({ onNext }) {
    return (
      <div>
        <h1>Which restaurant are you at ? </h1>
        <button onClick={onNext}>Barcelona Wine Bar</button><br/>
        <button onClick={onNext}>Zuma</button><br/>
        <button onClick={onNext}>Le petit Robert</button>


      </div>
    );
  }
  
export default LandingPage;