import React, { Component } from "react";
import LoadMapCz from "../components/LoadMapCz";

export default class MapyCZ extends Component {
  state = {
    userList: [], // list is empty in the beginning
    error: false,
    mapsReady: false
  };

  componentWillMount() {
    LoadMapCz(() => {
      // Work to do after the library loads.
      this.setState({ mapsReady: true });
      console.log("mapy OK:");
      // var center = SMap.Coords.fromWGS84(14.4179, 50.12655);
      // var m = new SMap(JAK.gel("mapa"), center, 13);
      // m.addDefaultLayer(SMap.DEF_BASE).enable();
    });
  }

  componentDidMount() {
    console.log("mapy componentDidMount:");
    // this.getMapCz(); // function call
  }

  // loadGoogleMaps = (callback) => {

  //   if (!existingScript) {
  //     const script = document.createElement('script');
  //     script.src = 'https://maps.googleapis.com/maps/api/js?key=<API Key>&libraries=places';
  //     script.id = 'googleMaps';
  //     document.body.appendChild(script);

  //     script.onload = () => {
  //       if (callback) callback();
  //     };
  //   }

  //   if (existingScript && callback) callback();
  // };

  getMapCz = () => {
    try {
      const existingScript = document.getElementById("mapyCz");
      console.log("Iniscript je: ", existingScript);
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://api.mapy.cz/loader.js";
        script.id = "maps";
        document.body.appendChild(script);

        script.onload = () => {
          // var center = SMap.Coords.fromWGS84(14.4179, 50.12655);
          // var m = new SMap(JAK.gel("mapyCz"), center, 13);
          // m.addDefaultLayer(SMap.DEF_BASE).enable();
          console.log("script je: ", script);
          //console("m je: ", m);
          // this.setState({ userList: data.results });
        };

        // const scriptLoad = document.createElement("script");
        // scriptLoad.type = "text/javascript";
        // scriptLoad.text = "Loader.load();";
        // document.body.appendChild(scriptLoad);
        // scriptLoad.onload = () => {
        //   var SMap = script.children;
        //   var JAK = script.children;
        //   var center = SMap.Coords.fromWGS84(14.4179, 50.12655);
        //   var m = new SMap(JAK.gel("mapyCz"), center, 13);
        //   m.addDefaultLayer(SMap.DEF_BASE).enable();
        //   //console("m je: ", m);
        //   // this.setState({ userList: data.results });
        // };
      }
      //try to get data
      // const loader = await fetch("");
      // console("loader je: ", loader);
      // if (loader.ok) {
      //   // ckeck if status code is 200
      //   // Loader.async = true;
      //   // Loader.load(null, { poi: this.props.poi }, function() {
      //   //   e.setState({ scriptLoadingState: b });
      //   //   console("loader je done: ", loader);
      //   // });
      //   // var center = SMap.Coords.fromWGS84(14.4179, 50.12655);
      //   // var m = new SMap(JAK.gel("m"), center, 13);
      //   // m.addDefaultLayer(SMap.DEF_BASE).enable();
      //   // console("center je: ", center);
      //   // console("m je: ", m);
      //   // this.setState({ userList: data.results });
      // } else {
      //   this.setState({ error: true });
      // }
    } catch (e) {
      //code will jump here if there is a network problem
      this.setState({ error: true });
    }
  };
  render() {
    const { mapsReady, error } = this.state;
    // if (mapsReady) {
    //   var stred = SMap.Coords.fromWGS84(14.41, 50.08);
    //   var mapa = new SMap(JAK.gel("mapa"), stred, 10);
    //   mapa.addDefaultLayer(SMap.DEF_BASE).enable();
    //   mapa.addDefaultControls();
    // }

    return (
      <>
        <div>{error && <div>Sorry, can not display the data</div>}</div>;
        <div className="MapsComponent">
          {this.state.mapsReady ? "OK" : "NOK"}
        </div>
        <div id="mapa"></div>
      </>
    );
  }

  // render() {
  //   const { userList, error } = this.state;
  //   return (
  //     <div>
  //       {userList.length > 0 &&
  //         userList.map(user => (
  //           <div key={user}>
  //             <img src={user.picture.medium} alt="user" />
  //             <div>
  //               <div>
  //                 {user.name.first}
  //                 {user.name.last}
  //               </div>
  //               <div>{user.phone}</div>
  //               <div>{user.email}</div>
  //             </div>
  //           </div>
  //         ))}
  //       {error && <div>Sorry, can not display the data</div>}
  //     </div>
  //   );
  // }
}
