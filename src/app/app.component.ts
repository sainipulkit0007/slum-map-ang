import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs';

declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slum-map';
  map: any;
  @ViewChild('map') mapElement: any;
  lat = 28.633569024567407;
  lng = 77.4455361419402;

  markers = [
    { lat: 28.637222, lng:77.326111, title: "Bhowapur Slum Colony, Kaushambi, Ghaziabad" },
    { lat: 28.62658, lng: 77.55228, title: "Amogha Educational Society"},
    { lat: 28.75606, lng: 77.859, label: "ABC Educational Society"},
    { lat: 28.66334, lng: 78.53352 },
    { lat: 29.99407, lng: 77.31618 },
    { lat: 28.92393, lng: 78.58339 }
  ];
  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng, this.title),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    this.markers.forEach(location => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng, location.title),
        map: this.map,
        title: "Bhowapur Slum Colony"
      });
    
  
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Bhowapur Slum Colony</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Bhowapur Slum Colony</b>, is" +
    "an urban slum where a large number of Wastepicker families reside, and provide the service of collecting and segregating urban waste from surrounding households. Families living in poverty, suffering exploitation on several fronts, yet providing a crucial service to the society. " + 
    "<br> Address- Kaushambi, Ghaziabad.</p>" +
    '<p>Attribution: Bhowapur Slum Colony <a href="http://wikimapia.org/25901644/Bhowapur-Slum-Colony-Kaushambi-Ghaziabad#:~:text=Bhowapur%20Slum%20Colony%2C%20Kaushambi%2C%20Ghaziabad%20(Ghaziabad)&text=Families%20living%20in%20poverty%2C%20suffering,crucial%20service%20to%20the%20society.">' +
    "https://www.giveindia.org/children" + "</a> </p>" +
    "</div>" +
    "</div>";
    
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
});
}
}
