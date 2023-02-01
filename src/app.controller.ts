import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/') // you can pass routes to this method decorator
  @Render('index')
  index() {
    let viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return {
      viewData: viewData,
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['title'] = 'About us - Online Store';
    viewData['subtitle'] = 'About us';
    viewData['description'] = 'This is an about page ...';
    viewData['author'] = 'Developed by: Your Name';
    return {
      viewData: viewData,
    };
  }
}

// In summary, once a user visits the “/” route, Nest will execute the AppController index method, which will render
// the index view
