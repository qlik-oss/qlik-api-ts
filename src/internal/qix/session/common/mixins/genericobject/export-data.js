export const mixin = {
  types: "GenericObject",

  override: {
    /**
     * Exports data for this object for all or specific hypercubes inside of it.
     *
     * @param {String} [fileType] The file type to export into. Possible values are: CSV_C, CSV_T, OOXML.
     *                            Defaults to OOXML.
     * @param {String} [path] The path to a specific hypercube to export. Defaults to all. If CSV file type is chosen, this
     *                        must be set.
     * @param {String} [filename] Suggested filename for the user when downloading the file. Could be used to customize
     *                            the experience with object title etc.
     * @param {String} [exportState] Defines the values to be exported. Possible values are: P for possible, A for all.
     *                               Default is P.
     * @returns {Promise} A promise of the RPC call's response
     */
    exportData(_exportData, fileType, path, filename, exportState) {
      fileType = fileType || "OOXML";
      path = path || "";
      filename = filename || "";
      exportState = exportState || "P";
      return _exportData(fileType, path, filename, exportState);
    },
  },
};
