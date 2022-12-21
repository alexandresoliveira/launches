import { Launches } from "@infrastructure/entities/launches.entity";
import { AppDataSource } from "@infrastructure/repository/data-source";
import { LaunchesRepository } from "@infrastructure/repository/launches.repository";
import ValidationError from "@shared/errors/validation.error";
import express from "express";
import LaunchesController from "./launches.controller"
import LaunchesService from "./launches.service";


jest.mock('@infrastructure/repository/launches.repository')
const LaunchesRepositoryMock = LaunchesRepository as jest.Mock<LaunchesRepository>
const launchesRepositoryMock = new LaunchesRepositoryMock()

const router = express.Router()

test("should get all the launches", async () => {
    const responsePromise = new Promise<Launches[]>((resolve) => {
        return resolve([{ id: 1, rocket: "Apolo13", date: new Date() }])
    })

    jest.spyOn(launchesRepositoryMock, 'find').mockReturnValueOnce(responsePromise)

    const launches = await (new LaunchesController(router, new LaunchesService(launchesRepositoryMock)).getAllLaunches())

    expect(launches).toBeDefined()
})

test("should add a new launch", async () => {
    const launchToCreate = { id: 1, rocket: "Apolo13", date: new Date() }
    const responsePromise = new Promise<Launches>((resolve) => {
        return resolve(launchToCreate)
    })

    jest.spyOn(launchesRepositoryMock, 'save').mockReturnValueOnce(responsePromise)

    const launch = await (new LaunchesController(router, new LaunchesService(launchesRepositoryMock)).saveLaunch(launchToCreate))

    expect(launch).toBeDefined()
})

test("should try to add a new launch and return a validation error", async () => {
    const launchToCreate = { id: 1, rocket: null, date: null }
    const responsePromise = new Promise<Launches>((resolve) => {
        return resolve(launchToCreate)
    })

    jest.spyOn(launchesRepositoryMock, 'save').mockReturnValueOnce(responsePromise)
    let errorTest = null;
    try {
        const launch = await (new LaunchesController(router, new LaunchesService(launchesRepositoryMock)).saveLaunch(launchToCreate))
    }
    catch (error) {
        errorTest = error;
    }
    expect(errorTest).toBeInstanceOf(ValidationError)
})