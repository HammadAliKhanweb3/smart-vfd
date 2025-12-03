-- CreateTable
CREATE TABLE "SensorsData" (
    "id" SERIAL NOT NULL,
    "inputVoltage" DOUBLE PRECISION NOT NULL,
    "inputCurrent" DOUBLE PRECISION,
    "voltagePhaseOne" DOUBLE PRECISION,
    "currentPhaseOne" DOUBLE PRECISION,
    "voltagePhaseTwo" DOUBLE PRECISION,
    "currentPhaseTwo" DOUBLE PRECISION,
    "voltagePhaseThree" DOUBLE PRECISION,
    "currentPhaseThree" DOUBLE PRECISION,
    "vfdTemperature" DOUBLE PRECISION,
    "motorTemperature" DOUBLE PRECISION,
    "motorTorque" DOUBLE PRECISION,
    "motorSpeed" DOUBLE PRECISION,

    CONSTRAINT "SensorsData_pkey" PRIMARY KEY ("id")
);
