import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/') // you can pass routes to this method decorator
  @Render('index')
  index() {}
}

// In summary, once a user visits the “/” route, Nest will execute the AppController index method, which will render
// the index view
