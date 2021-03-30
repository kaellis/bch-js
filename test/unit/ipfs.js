const assert = require("chai").assert
const sinon = require("sinon")
const BCHJS = require("../../src/bch-js")
const mockData = require("./fixtures/ipfs-mock")
describe(`#IPFS`, () => {
  describe("#initUppy", () => {
    it("should initialize uppy", () => {
  describe("#createFileModelServer", () => {
    it("should throw an error if file does not exist", async () => {
        const path = "/non-existant-file"
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
        assert.include(err.message, `Could not find this file`)
    it("should create a new file model", async () => {
      const path = `${__dirname}/ipfs.js`
        .stub(bchjs.IPFS.axios, "post")
      assert.property(result, "success")
      assert.property(result, "hostingCostBCH")
      assert.property(result, "hostingCostUSD")
      assert.property(result, "file")

      assert.property(result.file, "payloadLink")
      assert.property(result.file, "hasBeenPaid")
      assert.property(result.file, "_id")
      assert.property(result.file, "schemaVersion")
      assert.property(result.file, "size")
      assert.property(result.file, "fileName")
      assert.property(result.file, "fileExtension")
      assert.property(result.file, "createdTimestamp")
      assert.property(result.file, "hostingCost")
      assert.property(result.file, "walletIndex")
      assert.property(result.file, "bchAddr")
  describe("#uploadFileServer", () => {
    it("should throw an error if file does not exist", async () => {
        const path = "/non-existant-file"
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
        assert.include(err.message, `Could not find this file`)
    it("should throw an error if modelId is not included", async () => {
        const path = `${__dirname}/ipfs.js`
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
        assert.include(err.message, `Must include a file model ID`)
    it("Should throw error if the file was not uploaded", async () => {
              id: "file id"
        sandbox.stub(bchjs.IPFS.uppy, "upload").resolves(mock)
        const path = `${__dirname}/ipfs.js`
        await bchjs.IPFS.uploadFileServer(path, "5ec562319bfacc745e8d8a52")
        assert.equal(true, false, "Unexpected result")
        //console.log(err)
        assert.include(err.message, `The file could not be uploaded`)
    it("should return file object if the file is uploaded", async () => {
        sandbox.stub(bchjs.IPFS.uppy, "upload").resolves(mockData.uploadData)
        const path = `${__dirname}/ipfs.js`
          "5ec562319bfacc745e8d8a52"
        assert.property(result, "schemaVersion")
        assert.property(result, "size")
        assert.property(result, "fileId")
        assert.property(result, "fileName")
        assert.property(result, "fileExtension")
        //console.log(err)
        assert.equal(true, false, "Unexpected result")
  describe("#getStatus", () => {
    it("should throw an error if modelId is not included", async () => {
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
        assert.include(err.message, `Must include a file model ID`)
    it("should get data on an unpaid file", async () => {
      const modelId = "5ec7392c2acfe57aa62e945a"
        .stub(bchjs.IPFS.axios, "get")
      assert.property(result, "hasBeenPaid")
      assert.property(result, "satCost")
      assert.property(result, "bchAddr")
      assert.property(result, "ipfsHash")
      assert.property(result, "fileId")
      assert.property(result, "fileName")
    it("should get data on an unpaid file", async () => {
      const modelId = "5ec7392c2acfe57aa62e945a"
        .stub(bchjs.IPFS.axios, "get")
      assert.property(result, "hasBeenPaid")
      assert.property(result, "satCost")
      assert.property(result, "bchAddr")
      assert.property(result, "ipfsHash")
      assert.property(result, "fileId")
      assert.property(result, "fileName")
  describe("#createFileModelWeb", () => {
    it("should throw an error if file is undefined", async () => {
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
        assert.include(err.message, `File is required`)
    it("should throw an error if file is empty", async () => {
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
          `File should have the property 'name' of string type`
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
          `File should have the property 'name' of string type`
          name: "ipfs.js"
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
          `File should have the property 'size' of number type`
    it("should create a new file model", async () => {
        name: "ipfs.js",
        type: "text/plain"
        .stub(bchjs.IPFS.axios, "post")
      assert.property(result, "success")
      assert.property(result, "hostingCostBCH")
      assert.property(result, "hostingCostUSD")
      assert.property(result, "file")

      assert.property(result.file, "payloadLink")
      assert.property(result.file, "hasBeenPaid")
      assert.property(result.file, "_id")
      assert.property(result.file, "schemaVersion")
      assert.property(result.file, "size")
      assert.property(result.file, "fileName")
      assert.property(result.file, "fileExtension")
      assert.property(result.file, "createdTimestamp")
      assert.property(result.file, "hostingCost")
      assert.property(result.file, "walletIndex")
      assert.property(result.file, "bchAddr")
  describe("#uploadFileWeb", () => {
    it("should throw an error if file is undefined", async () => {
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
        assert.include(err.message, `File is required`)
    it("should throw an error if file is empty", async () => {
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
          `File should have the property 'name' of string type`
          type: "text/plain"
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
          `File should have the property 'name' of string type`
          name: "ipfs.js",
          type: "text/plain"
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
          `File should have the property 'size' of number type`
          name: "ipfs.js",
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
          `File should have the property 'type' of string type`
    it("should throw an error if modelId is not included", async () => {
          name: "ipfs.js",
          type: "text/plain"
        assert.equal(true, false, "Unexpected result")
        //console.log(`err.message: ${err.message}`)
        assert.include(err.message, `Must include a file model ID`)
    it("Should throw error if the file was not uploaded", async () => {
              id: "file id"
        sandbox.stub(bchjs.IPFS.uppy, "upload").resolves(mock)
          name: "ipfs.js",
          type: "text/plain"
        await bchjs.IPFS.uploadFileWeb(file, "5ec562319bfacc745e8d8a52")
        assert.equal(true, false, "Unexpected result")
        //console.log(err)
        assert.include(err.message, `The file could not be uploaded`)
    it("should return file object if the file is uploaded", async () => {
        sandbox.stub(bchjs.IPFS.uppy, "upload").resolves(mockData.uploadData)
          name: "ipfs.js",
          type: "text/plain"
          "5ec562319bfacc745e8d8a52"
        assert.property(result, "schemaVersion")
        assert.property(result, "size")
        assert.property(result, "fileId")
        assert.property(result, "fileName")
        assert.property(result, "fileExtension")
        //console.log(err)
        assert.equal(true, false, "Unexpected result")