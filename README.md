# Angular-versiones
Proyectos de angular en versiones diferentes, inicio en la versión 11

## Temas

* Lazy Loading
* Angular Material
* Bootstrap

## Comandos CLI

```
CREAR MÓDULOS:

→ Crear dos archivos el módulo y el archivo de rutas
ng generate module core/customers --routing
ng generate module core/orders --routing

OR

→ Crear el archivo de de rutas, el módulo y la ruta general
ng generate module core/customers --route customers --module app.module
ng generate module core/orders --route orders --module app.module


CREAR COMPONETES DENTRO DE CADA MÓDULO:

ng generate component core/customers/components/customer-list --skipTests
ng generate component core/orders/components/order-list --skipTests

Fichero del modulo creado ordes-routing.module.ts
  {
    path: '',
    component: OrderListComponent
  }

Fichero general app-routing.module.ts → (Lazy Loading)

  {
    path: 'customers',
    loadChildren: () => import('./core/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }


Eliminar los componentes del fichero general app.module.ts

BONUS - PRELOAD MODULES:

app-routing.module.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

Preload modules in background:

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})

```
## ANGULAR MATERIAL

```
ng add @angular/material
ng g m app-material -m=app --flat (Crear un módulo especifico para Angular Material)


```

## ADD BOOTSTRAP IN ANGULAR 11
* **https://therichpost.com/add-bootstrap-in-angular-11/**

