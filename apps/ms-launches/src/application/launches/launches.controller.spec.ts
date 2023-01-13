import { LaunchesRepository } from "@infrastructure/repository/launches.repository";
import { LaunchesDTO } from "@shared/dtos/launches.dto";
import ValidationError from "@shared/errors/validation.error";
import express from "express";
import LaunchesController from "./launches.controller";
import LaunchesService from "./launches.service";

jest.mock("@infrastructure/repository/launches.repository");
const LaunchesRepositoryMock =
  LaunchesRepository as jest.Mock<LaunchesRepository>;
const launchesRepositoryMock = new LaunchesRepositoryMock();

const router = express.Router();

test("should add a new launch", async () => {
  const launchToCreate: LaunchesDTO = new LaunchesDTO(
    1,
    { name: "Appolo", id: 1 },
    1,
    new Date(),
    true,
    "af454482-8e0f-4d2f-875b-2b1265b001f6"
  );
  const responsePromise = new Promise<LaunchesDTO>((resolve) => {
    return resolve(launchToCreate);
  });

  jest
    .spyOn(launchesRepositoryMock, "save")
    .mockReturnValueOnce(responsePromise);
  const launch = await new LaunchesController(
    router,
    new LaunchesService(launchesRepositoryMock)
  ).saveLaunch(launchToCreate);

  expect(launch).toBeDefined();

  jest.resetAllMocks();
});

test("should try to add a new launch and return a validation error", async () => {
  const launchToCreate: LaunchesDTO = {
    id: 1,
    rocket: null,
    rocketId: 0,
    date: null,
    success: true,
    launchCode: "123",
  };
  const responsePromise = new Promise<LaunchesDTO>((resolve) => {
    return resolve(launchToCreate);
  });

  jest
    .spyOn(launchesRepositoryMock, "save")
    .mockReturnValueOnce(responsePromise);
  let errorTest = null;
  try {
    await new LaunchesController(
      router,
      new LaunchesService(launchesRepositoryMock)
    ).saveLaunch(launchToCreate);
  } catch (error) {
    errorTest = error;
  }
  expect(errorTest).toBeInstanceOf(ValidationError);

  jest.resetAllMocks();
});

/*
    #TASK-BACKEND-4 (TESTS/JEST)- WRITE A TEST TO VALIDATE ALL THE FLOW IMPLEMENTED.
  */
test("should to find all rockets when name is null", async () => {
  const launchToFind: LaunchesDTO = {
    id: 1,
    rocket: {
      id: 0,
      name: "test",
    },
    rocketId: 0,
    date: null,
    success: true,
    launchCode: "123",
  };
  const launchToFind2: LaunchesDTO = {
    id: 1,
    rocket: {
      id: 0,
      name: "test2",
    },
    rocketId: 0,
    date: null,
    success: true,
    launchCode: "1233",
  };
  const responsePromise = new Promise<LaunchesDTO[]>((resolve) => {
    return resolve([launchToFind, launchToFind2]);
  });

  jest
    .spyOn(launchesRepositoryMock, "findByName")
    .mockReturnValueOnce(responsePromise);
  let launches: LaunchesDTO[] = await new LaunchesController(
    router,
    new LaunchesService(launchesRepositoryMock)
  ).getLauchesByRocket(null);
  expect(launches.length).toEqual(2);

  jest.resetAllMocks();
});

test("should to find a rocket by name", async () => {
  const launchToFind: LaunchesDTO = {
    id: 1,
    rocket: {
      id: 0,
      name: "test",
    },
    rocketId: 0,
    date: null,
    success: true,
    launchCode: "123",
  };
  const responsePromise = new Promise<LaunchesDTO[]>((resolve) => {
    return resolve([launchToFind]);
  });

  jest
    .spyOn(launchesRepositoryMock, "findByName")
    .mockReturnValueOnce(responsePromise);
  let launches: LaunchesDTO[] = await new LaunchesController(
    router,
    new LaunchesService(launchesRepositoryMock)
  ).getLauchesByRocket("test");
  expect(launches.length).toEqual(1);

  jest.resetAllMocks();
});

test("should to not find any rocket with incorrect name", async () => {
  const responsePromise = new Promise<LaunchesDTO[]>((resolve) => {
    return resolve([]);
  });

  jest
    .spyOn(launchesRepositoryMock, "findByName")
    .mockReturnValueOnce(responsePromise);
  let launches: LaunchesDTO[] = await new LaunchesController(
    router,
    new LaunchesService(launchesRepositoryMock)
  ).getLauchesByRocket("incorrect-name");
  expect(launches.length).toEqual(0);

  jest.resetAllMocks();
});

test("should to expect cypher launchCode attribute", async () => {
  const launchToFind: LaunchesDTO = {
    id: 1,
    rocket: {
      id: 0,
      name: "test",
    },
    rocketId: 0,
    date: null,
    success: true,
    launchCode: "5515151",
  };
  const responsePromise = new Promise<LaunchesDTO[]>((resolve) => {
    return resolve([launchToFind]);
  });

  jest
    .spyOn(launchesRepositoryMock, "findByName")
    .mockReturnValueOnce(responsePromise);

  let launches = await new LaunchesController(
    router,
    new LaunchesService(launchesRepositoryMock)
  ).getLauchesByRocket("test");

  expect(launches).not.toBeNull;
  expect(launches.length).toEqual(1);
  expect(launches[0].launchCode).not.toEqual("5515151");

  jest.resetAllMocks();
});
