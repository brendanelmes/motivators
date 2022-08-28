# motivators

An application for collecting and analysing what motivates your team

## Stack

Gradle Spring Boot, Angular, GCP Datastore

## Local Development

### Run

To run the full application locally, run command:

```shell
npm run dev
```

### Test

To test the full application locally, run command:

```shell
npm run test
```

### Datastore

The Datastore Emulator will be created automatically when the application starts.

#### Setup

To set up the Datastore Emulator locally, run command:

```shell
gcloud components install cloud-datastore-emulator
```

You can start the emulator manually using the command:

```shell
gcloud beta emulators datastore start
```
