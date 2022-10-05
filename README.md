# Nextjs Template with Tailwind, Firebase Auth Setup via React Context API (TypeScript)

This is a template for Nextjs with Tailwind, Firebase Auth Setup via React Context API (TypeScript)

## Get Started

1. Install the template using `create-next-app`

    ```bash
    npx create-next-app --example https://github.com/trehansangpriya/nextjs-tailwind-firebase-auth-starter-ts
    ```

    or

    ```bash
    yarn create next-app --example https://github.com/trehansangpriya/nextjs-tailwind-firebase-auth-starter-ts
    ```

2. Create a Firebase project.

3. Remove 'md' from the  `.env.local.md` file in the root of the project and add the following environment variables:

    ```bash
    NEXT_PUBLIC_FIREBASE_API_KEY=
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
    NEXT_PUBLIC_FIREBASE_APP_ID=
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
    ```

    You can find these values in your Firebase project settings.

4. Follow the instructions in `src/firebase/FirebaseConfig/index.tsx` to enable your Firebase config.

5. Enable AuthProvider in `pages/_app.tsx`

6. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```
