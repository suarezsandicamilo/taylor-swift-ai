# Instrucciones para README

## Configuración del Entorno

1. **Instalar WSL Ubuntu:**
   - Sigue las instrucciones para instalar Windows Subsystem for Linux (WSL) con la distribución de Ubuntu. Puedes encontrar las instrucciones en [Microsoft WSL Documentation](https://docs.microsoft.com/en-us/windows/wsl/).

2. **Instalar Node.js en Ubuntu:**
   - Utiliza el siguiente comando para instalar Node.js en Ubuntu:
     ```bash
     sudo apt-get update
     sudo apt-get install nodejs
     ```

## Configuración del Proyecto

3. **Clonar el repositorio:**
   - Clona el repositorio desde GitHub utilizando el siguiente comando:
     ```bash
     git clone https://github.com/suarezsandicamilo/taylor-swift-ai.git
     ```

4. **Configurar la Ruta del Modelo:**
   - Navega al archivo `taylor-swift-ai/src/Outputs/taylor_swift_js_v2/model.json` y copia el path completo de este archivo.

5. **Editar el archivo .env:**
   - Abre el archivo `.env` y asigna el valor de `MODEL_PATH` al path del archivo de modelo que copiaste anteriormente.

## Configuración del Proyecto Node.js

6. **Instalar Dependencias:**
   - Ejecuta el siguiente comando para instalar las dependencias del proyecto:
     ```bash
     npm install
     ```

7. **Ejecutar el Frontend de React:**
   - Utiliza el siguiente comando para iniciar el servidor del Frontend de React:
     ```bash
     npm run start
     ```
   - Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para acceder a la aplicación.

8. **Ejecutar el Backend de Express:**
   - Ejecuta el siguiente comando para iniciar el servidor del Backend de Express:
     ```bash
     npm run server
     ```
   - El servidor estará disponible en [http://localhost:3001](http://localhost:3001).

9. **Acceder con Google:**
   - La aplicación requerirá acceso con Google. Asegúrate de tener las credenciales de OAuth configuradas según las instrucciones del proyecto.

10. **Visitar la Aplicación:**
   - Accede a la aplicación visitando [http://localhost:3000](http://localhost:3000) en tu navegador.
