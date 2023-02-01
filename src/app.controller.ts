import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/') // you can pass routes to this method decorator
  @Render('index')
  index() {
    return {
      title: 'Home Page - Online Store',
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['description'] = 'This is an about page...';
    viewData['author'] = 'Developed by: Lucas jstn';
    const data1 = 'About us - Online Store';

    return {
      title: data1,
      subtitle: 'About us',
      viewData: viewData,
    };
  }
}

// In summary, once a user visits the “/” route, Nest will execute the AppController index method, which will render
// the index view
