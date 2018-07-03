import { Injectable } from '@angular/core';

/*
  Generated class for the MediaCaptureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var Capture;
@Injectable()
export class MediaCaptureProvider {

  constructor() {
    console.log('Hello MediaCaptureProvider Provider');

  }

  startRecording(){
    var options = { limit: 3 };
    try{
<<<<<<< HEAD
      Capture.navigator.device.capture.captureAudio(this.captureSuccess, this.captureError, options);
    } catch (e){
      console.log("An error occured:");
=======
      console.log("Starting to record")
      Capture.navigator.device.capture.captureAudio(this.captureSuccess, this.captureError, options);
    } catch (e){
      console.log("An error occured trying to record:");
>>>>>>> b72e9af55b2a0aa516b02623179629b4c656e07c
      console.log(e.message);
      console.log(e);
    }
  }

  stopRecording(){

  }

  captureSuccess(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
      }
  };

  // capture error callback
  captureError(error) {
      Capture.navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
  };

}
